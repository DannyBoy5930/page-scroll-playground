import H1 from "~/components/ui/h1";
import picture2 from "public/images/2.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <article>
      <H1 className="mb-10">Page Transition Page</H1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti qui
        ad saepe architecto. Eaque facilis libero iusto fuga fugiat? Tempora
        adipisci, officiis dolorem autem assumenda quod illo deserunt nemo in?
      </p>
      <Image
        src={picture2}
        alt="Picture of sand stone"
        className="my-5"
      ></Image>
    </article>
  );
}
