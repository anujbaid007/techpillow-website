import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  icon: string;
}

interface TechStackLogosProps {
  technologies: Technology[];
  className?: string;
}

export function TechStackLogos({ technologies, className }: TechStackLogosProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-muted/50"
        >
          <span className="text-xs font-mono text-muted-foreground select-none">
            {"</>"}
          </span>
          <span className="text-sm font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
