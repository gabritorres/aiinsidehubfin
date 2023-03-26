import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";

export default function Nosotros() {
  return (
    <Layout
      title={"About Us"}
      description={"Connect with us to support you on your AI journey"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros </h1>

        <div className="">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mollis, urna non bibendum blandit, lectus libero
              condimentum quam, et volutpat eros augue ac diam. Praesent ac ante
              consectetur, viverra dolor vitae, euismod ipsum. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nullam volutpat nisi eu enim commodo, quis
              tincidunt magna aliquet. Integer in rutrum ipsum, ac convallis
              ante. Etiam id urna et magna venenatis pulvinar. Nullam porttitor
              nec tortor in malesuada. Nam pharetra vulputate orci eu malesuada.
              Vivamus sed ultricies enim. Nam id efficitur risus. Praesent
              molestie lectus consectetur eleifend consequat. Duis blandit metus
              in nisi dapibus mattis eget vel ex.
            </p>
            <br></br>
            <br></br>
            <p>
              Pellentesque pretium nisi vitae ante aliquam lacinia. Maecenas
              condimentum volutpat magna, at laoreet est cursus a. Donec vitae
              diam urna. Cras rutrum nec nibh in finibus. Fusce condimentum
              eleifend nulla, non varius neque ultricies euismod. Cras molestie
              magna ac finibus lobortis. Suspendisse pretium ex nisi, vel
              pellentesque lorem ultrices a.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
