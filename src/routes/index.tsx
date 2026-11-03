import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Check, ClipboardCheck, ClipboardList, Clock, Download, FileText, GraduationCap,
  Headset, HeartPulse, NotebookPen, ShieldCheck, Smartphone, Stethoscope, UserRound, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@/assets/hero-mockup.jpg";
import combo from "@/assets/combo-mockup.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/uvfj77y";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAE e Anotações de Enfermagem | Material Completo" },
      { name: "description", content: "Material digital para dominar a SAE, diagnósticos, planejamento de cuidados e anotações de enfermagem." },
      { property: "og:title", content: "SAE e Anotações de Enfermagem | Material Completo" },
      { property: "og:description", content: "Modelos de SAE, diagnósticos, evolução e anotações de enfermagem em um só material digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const conteudo = [
  { icon: ClipboardList, t: "Modelos de SAE", d: "Materiais para compreender e organizar as etapas da Sistematização da Assistência de Enfermagem." },
  { icon: Stethoscope, t: "Diagnósticos de Enfermagem", d: "Conteúdo de apoio para identificação de problemas e elaboração de diagnósticos de enfermagem." },
  { icon: HeartPulse, t: "Planejamento de Cuidados", d: "Exemplos de planejamento, intervenções e resultados esperados para a assistência." },
  { icon: FileText, t: "Anotações de Enfermagem", d: "Modelos e exemplos de registros claros, objetivos, completos e organizados." },
  { icon: NotebookPen, t: "Evolução de Enfermagem", d: "Orientações e exemplos para compreender a documentação da evolução do paciente." },
  { icon: BookOpen, t: "Material de Consulta", d: "Conteúdo digital para estudar, revisar e consultar sempre que precisar." },
];
const beneficios = [
  { icon: Clock, t: "Economize tempo", d: "Tenha materiais organizados para facilitar seus estudos e consultas." },
  { icon: GraduationCap, t: "Aprenda na prática", d: "Compreenda melhor como funciona a SAE e a documentação de enfermagem." },
  { icon: ClipboardCheck, t: "Organização dos registros", d: "Aprenda a estruturar anotações de enfermagem com clareza e objetividade." },
  { icon: Smartphone, t: "Mais praticidade", d: "Acesse seu material digital pelo celular, tablet ou computador." },
];
const publico = [
  { icon: GraduationCap, t: "Estudantes de Enfermagem", d: "Para estudantes que precisam aprender SAE e desenvolver habilidades de registros de enfermagem." },
  { icon: UserRound, t: "Técnicos de Enfermagem", d: "Para profissionais que desejam aprimorar seus conhecimentos sobre anotações e registros." },
  { icon: Stethoscope, t: "Enfermeiros", d: "Para profissionais que buscam materiais de consulta e atualização." },
];
const itens = [
  "Material de apoio sobre SAE", "Modelos de Sistematização da Assistência de Enfermagem",
  "Conteúdo de apoio sobre diagnósticos", "Planejamento e intervenções de enfermagem",
  "Modelos de Anotações de Enfermagem", "Exemplos de registros e evolução", "Material digital para consulta",
];
const garantia = [
  { icon: ShieldCheck, t: "Compra segura", d: "Pagamento realizado por plataforma de checkout segura." },
  { icon: Download, t: "Acesso digital", d: "Receba as instruções de acesso após a confirmação do pagamento." },
  { icon: Headset, t: "Suporte", d: "Orientações para acessar seu material." },
];
const faq: [string, string][] = [
  ["Como vou receber o material?", "Após a confirmação do pagamento, você receberá as orientações de acesso ao material digital."],
  ["O material é físico ou digital?", "O material é 100% digital e pode ser acessado em dispositivos compatíveis."],
  ["Posso acessar pelo celular?", "Sim! Você poderá acessar pelo celular, tablet ou computador."],
  ["O material é indicado para estudantes?", "Sim! É indicado para estudantes de enfermagem que desejam aprender e revisar conteúdos de SAE e Anotações de Enfermagem."],
  ["O material serve para profissionais?", "Sim! Também pode ser utilizado como material complementar de consulta por técnicos e enfermeiros."],
  ["Posso utilizar os modelos diretamente nos pacientes?", "Os modelos são materiais educativos e devem ser adaptados à avaliação individual do paciente, aos protocolos institucionais e às normas profissionais vigentes."],
  ["Vou receber atualizações?", "As condições de atualização devem seguir o que estiver previsto na oferta do produto."],
];

const LINK_RECUSA = "https://farmaplicada.lovable.app";

function Cta({ children, href = "#oferta" }: { children: string; href?: string }) {
  return (
    <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
      <a href={href}>{children}</a>
    </Button>
  );
}

function Recusa({ dark }: { dark?: boolean }) {
  return (
    <a
      href={LINK_RECUSA}
      className={`mt-4 inline-block text-sm underline underline-offset-4 transition-colors ${
        dark ? "text-primary-foreground/60 hover:text-primary-foreground" : "text-muted-foreground hover:text-primary"
      }`}
    >
      Não aceito essa oferta
    </a>
  );
}

function Heading({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-base sm:text-lg md:mt-4 ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

type Item = { icon: typeof Clock; t: string; d: string };
function CardGrid({ items, cols }: { items: Item[]; cols: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
      {items.map(({ icon: Icon, t, d }) => (
        <div key={t} className="rounded-2xl border bg-card p-7 shadow-card transition-transform hover:-translate-y-1">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-secondary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-primary">{t}</h3>
          <p className="mt-2 text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-28">
          <div className="fade-up">
            <span className="inline-block rounded-full border border-accent/50 bg-accent/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent">
              + MATERIAL COMPLETO PARA ENFERMAGEM
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Domine a SAE e as Anotações de Enfermagem com <span className="text-accent">muito mais segurança!</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85">
              Tenha em mãos materiais práticos para facilitar a Sistematização da Assistência de Enfermagem, elaborar diagnósticos, planejar cuidados e realizar registros de enfermagem com mais clareza e organização.
            </p>
            <p className="mt-4 text-primary-foreground/70">
              Um material desenvolvido para ajudar você na rotina acadêmica e profissional, economizando tempo e facilitando o aprendizado.
            </p>
            <div className="mt-8"><Cta>QUERO ACESSAR O MATERIAL</Cta></div>
          </div>
          <img src={hero} alt="Materiais digitais de SAE e anotações de enfermagem em notebook, tablet e folhas" width={1280} height={1024} className="fade-up rounded-3xl shadow-2xl" />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="O que você vai receber?" sub="Um conteúdo organizado para ajudar você a compreender e aplicar os principais processos da assistência de enfermagem." />
          <CardGrid items={conteudo} cols="lg:grid-cols-3" />
          <div className="mt-12 text-center"><Cta>QUERO MEU MATERIAL</Cta></div>
        </div>
      </section>

      <section className="bg-soft px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Por que estudar com este material?" sub="Mais organização, praticidade e segurança para desenvolver seus conhecimentos em enfermagem." />
          <CardGrid items={beneficios} cols="lg:grid-cols-4" />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Para quem é este material?" sub="Desenvolvido para quem deseja aprender, revisar e aprimorar seus conhecimentos em enfermagem." />
          <CardGrid items={publico} cols="lg:grid-cols-3" />
        </div>
      </section>

      <section id="oferta" className="bg-hero px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl">
          <Heading light title="Tenha acesso ao material completo!" sub="Tudo o que você precisa para estudar SAE e Anotações de Enfermagem em um só lugar." />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src={combo} alt="Combo SAE e Anotações de Enfermagem" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-2xl" />
            <div className="rounded-3xl bg-card p-8 text-card-foreground shadow-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                <Zap className="h-3.5 w-3.5" /> ACESSO IMEDIATO
              </span>
              <h3 className="mt-4 text-2xl font-bold text-primary">Combo SAE + Anotações de Enfermagem</h3>
              <p className="mt-1 text-muted-foreground">Acesso digital aos materiais de estudo e consulta.</p>
              <ul className="mt-6 space-y-3">
                {itens.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t pt-6 text-center">
                <p className="text-muted-foreground line-through">De R$ 59,90</p>
                <p className="font-display text-5xl font-extrabold text-primary">R$ 12,90</p>
                <p className="mt-1 text-sm text-muted-foreground">Pagamento único</p>
                <div className="mt-6"><Cta href={CHECKOUT_URL}>QUERO ACESSAR O COMBO AGORA</Cta></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Heading title="Sua compra com tranquilidade" />
          <CardGrid items={garantia} cols="lg:grid-cols-3" />
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <Heading title="Dúvidas frequentes" />
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="rounded-2xl border bg-card px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-hero px-6 py-20 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Transforme sua maneira de estudar e registrar os cuidados de enfermagem!</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">Tenha mais organização e praticidade para aprender SAE e Anotações de Enfermagem.</p>
          <div className="mt-8"><Cta href={CHECKOUT_URL}>QUERO GARANTIR MEU ACESSO</Cta></div>
        </div>
        <footer className="mx-auto mt-16 max-w-3xl border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60">
          <p>Material educativo complementar. Não substitui formação profissional, avaliação clínica, legislação, protocolos institucionais ou julgamento profissional.</p>
          <nav className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-accent">Política de Privacidade</a>
            <a href="#" className="hover:text-accent">Termos de Uso</a>
            <a href="#" className="hover:text-accent">Contato</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
