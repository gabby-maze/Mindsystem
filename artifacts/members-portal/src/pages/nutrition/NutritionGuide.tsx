import PdfSlideViewer from "./PdfSlideViewer";

export default function NutritionGuide() {
  return (
    <div className="max-w-4xl mx-auto">
      <PdfSlideViewer pdfUrl={`${import.meta.env.BASE_URL}nutrition-guide.pdf`} />
    </div>
  );
}
