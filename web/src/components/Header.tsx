import logoImage from "../assets/logo.svg";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img
        src={logoImage}
        alt="logo de habits, quadrados superiores em varios tons de roxo e, texto habits abaixo do quadrados no tom de roxo escuro"
      />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4"
      >
        Novo hábito
      </button>
    </div>
  );
}
