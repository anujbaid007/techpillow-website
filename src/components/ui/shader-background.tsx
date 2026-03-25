"use client";

import { useEffect, useRef, useCallback } from "react";

const vertexShader = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;

    float dist = distance(st, mouse);

    // Warm energy field
    float wave1 = sin(st.x * 8.0 + u_time * 0.6) * cos(st.y * 6.0 + u_time * 0.4) * 0.5 + 0.5;
    float wave2 = sin(st.x * 4.0 - u_time * 0.3 + st.y * 3.0) * 0.5 + 0.5;
    float wave3 = cos(st.y * 10.0 + u_time * 0.8 + st.x * 2.0) * 0.5 + 0.5;

    // Mouse interaction - radial glow + ripple
    float mouseGlow = smoothstep(0.45, 0.0, dist) * 0.7;
    float mouseRipple = sin(dist * 25.0 - u_time * 2.5) * smoothstep(0.5, 0.0, dist) * 0.1;

    // TechPillow brand colors
    vec3 orange = vec3(1.0, 0.243, 0.0);       // #FF3E00
    vec3 amber = vec3(1.0, 0.6, 0.15);         // warm amber
    vec3 deepOrange = vec3(0.7, 0.12, 0.0);
    vec3 lightBg = vec3(1.0, 1.0, 1.0);        // white

    // Mix colors based on position and time
    vec3 color1 = mix(orange, amber, wave1);
    vec3 color2 = mix(deepOrange, orange, wave2);
    vec3 finalColor = mix(color2, color1, wave3 * 0.6);

    // Add mouse glow
    vec3 glowColor = mix(orange, amber, sin(u_time * 0.4) * 0.5 + 0.5);
    finalColor += glowColor * mouseGlow + vec3(mouseRipple);

    // Very subtle blend with white background
    float alpha = 0.06 + mouseGlow * 0.12 + wave1 * 0.03;
    finalColor = mix(lightBg, finalColor, alpha);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = compileShader(vertexShader, gl.VERTEX_SHADER);
    const fs = compileShader(fragmentShader, gl.FRAGMENT_SHADER);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const timeLoc = gl.getUniformLocation(program, "u_time");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = canvas.parentElement!.clientHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const startTime = Date.now();
    const render = () => {
      const time = (Date.now() - startTime) / 1000;
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(
        mouseLoc,
        mouseRef.current.x * Math.min(window.devicePixelRatio, 2),
        canvas.height - mouseRef.current.y * Math.min(window.devicePixelRatio, 2)
      );
      gl.uniform1f(timeLoc, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
