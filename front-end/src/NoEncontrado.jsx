import stopImg from "./assets/stop.png";

export function NoEncontrado() {
  return (
    <section>
      <img src={stopImg} alt="Alto" width="200" />
      <h2>¡Alto!</h2>
      <p>Esta página no existe.</p>
    </section>
  );
}