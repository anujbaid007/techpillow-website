import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = {
  logos: Logo[];
  className?: string;
};

export function LogoCloud({ logos, className }: LogoCloudProps) {
  // Split logos into rows of 4
  const firstRow = logos.slice(0, 4);
  const secondRow = logos.slice(4, 8);
  const allLogos = [...firstRow, ...secondRow];

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {allLogos.map((logo, index) => {
        const isFirstRow = index < 4;
        const col = index % 4;
        const isLastInFirstRow = isFirstRow && col === 3;
        const isFirstInSecondRow = !isFirstRow && col === 0;
        const isThirdInFirstRow = isFirstRow && col === 2;
        const hasAltBg =
          (isFirstRow && (col === 0 || col === 2)) ||
          (!isFirstRow && (col === 1 || col === 3));

        return (
          <LogoCard
            key={`${logo.alt}-${index}`}
            className={cn(
              isFirstRow && "border-b",
              col < 3 && "border-r",
              !isFirstRow && col === 3 && "border-r-0",
              hasAltBg && "bg-secondary dark:bg-secondary/30",
              isThirdInFirstRow && "relative",
              isFirstInSecondRow && "relative"
            )}
            logo={logo}
          >
            {isThirdInFirstRow && (
              <>
                <PlusIcon
                  className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
                  strokeWidth={1}
                />
                <PlusIcon
                  className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
                  strokeWidth={1}
                />
              </>
            )}
            {isFirstRow && col === 0 && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
                strokeWidth={1}
              />
            )}
          </LogoCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
