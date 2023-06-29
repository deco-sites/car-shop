export interface Props {
  title?: string;
  subtitle?: string;
  content?: string;
}

function Seo(
  {
    title = "What is Lorem Ipsum?",
    subtitle =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content =
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }: Props,
) {
  return (
    <div class="container text-center text- p-4 gap-6 lg:p-16 lg:gap-12 bg-secondary">
      <h1 class="text-[20px] text-[#FF5005] font-bold leading-[20px] mb-5 mt-2">
        {title}
      </h1>
      <h2 class="text-[14px] text-[#333333] mb-5">{subtitle}</h2>
      <p class="pb-5">{content}</p>
    </div>
  );
}

export default Seo;
