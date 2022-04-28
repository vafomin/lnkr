export const saveSvg = (id: string) => {
  const svgData = document?.querySelector(id)?.outerHTML || "";
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  downloadSvg(svgUrl);
};

const downloadSvg = (url: string) => {
  let link = document.createElement("a");
  link.classList.add("hide_link");
  link.download = "qr.svg";
  link.href = url;
  link.click();
};
