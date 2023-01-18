export default async function (
  color?: string | number[],
  brightness?: "dark" | "light"
) {
  if (!(window as any).flutter_inappwebview) return 0;

  const statusbarHeight: number = await flutter_inappwebview.callHandler(
    "set-statusbar",
    { color: color || "transparent", brightness: brightness || "dark" }
  );

  return statusbarHeight;
}
