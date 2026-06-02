export default function TemplatesPage() {
  const templates = [
    {
      title: "Blog Post",
      description: "Generate SEO friendly blog articles",
    },
    {
      title: "LinkedIn Post",
      description: "Professional LinkedIn content",
    },
    {
      title: "Email Copy",
      description: "Marketing and sales emails",
    },
    {
      title: "Instagram Caption",
      description: "Engaging social media captions",
    },
    {
      title: "SEO Article",
      description: "Long-form SEO optimized content",
    },
    {
      title: "Product Description",
      description: "E-commerce product content",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Templates
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.title}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {template.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {template.description}
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}