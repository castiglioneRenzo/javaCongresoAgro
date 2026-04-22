import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/RootLayout";
import { PublicLayout } from "./components/layouts/PublicLayout";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import { HomePage } from "./components/pages/HomePage";
import { ProgramPage } from "./components/pages/ProgramPage";
import { CircularesPage } from "./components/pages/CircularesPage";
import { TiposTrabajoPage } from "./components/pages/TiposTrabajoPage";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { RoleSelectionPage } from "./components/pages/RoleSelectionPage";
import { ParticipantDashboard } from "./components/pages/participant/ParticipantDashboard";
import { SubmitWorkPage } from "./components/pages/participant/SubmitWorkPage";
import { PaymentPage } from "./components/pages/participant/PaymentPage";
import { WorkshopsPage } from "./components/pages/participant/WorkshopsPage";
import { MyAgendaPage } from "./components/pages/participant/MyAgendaPage";
import { CertificatePage } from "./components/pages/participant/CertificatePage";
import { EvaluatorDashboard } from "./components/pages/evaluator/EvaluatorDashboard";
import { EvaluateWorkPage } from "./components/pages/evaluator/EvaluateWorkPage";
import { AdminDashboard } from "./components/pages/admin/AdminDashboard";
import { ManageSchedulePage } from "./components/pages/admin/ManageSchedulePage";
import { AssignEvaluatorsPage } from "./components/pages/admin/AssignEvaluatorsPage";
import { NewsPage } from "./components/pages/admin/NewsPage";
import { ManageWorksPage } from "./components/pages/admin/ManageWorksPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "",
        Component: PublicLayout,
        children: [
          { index: true, Component: HomePage },
          { path: "programa", Component: ProgramPage },
          { path: "circulares", Component: CircularesPage },
          { path: "tipos-trabajo", Component: TiposTrabajoPage },
        ],
      },
      { path: "login", Component: LoginPage },
      { path: "registro", Component: RegisterPage },
      { path: "seleccionar-rol", Component: RoleSelectionPage },
      {
        path: "participante",
        Component: DashboardLayout,
        children: [
          { index: true, Component: ParticipantDashboard },
          { path: "subir-trabajo", Component: SubmitWorkPage },
          { path: "pago", Component: PaymentPage },
          { path: "talleres", Component: WorkshopsPage },
          { path: "mi-agenda", Component: MyAgendaPage },
          { path: "certificado", Component: CertificatePage },
        ],
      },
      {
        path: "evaluador",
        Component: DashboardLayout,
        children: [
          { index: true, Component: EvaluatorDashboard },
          { path: "evaluar/:workId", Component: EvaluateWorkPage },
        ],
      },
      {
        path: "admin",
        Component: DashboardLayout,
        children: [
          { index: true, Component: AdminDashboard },
          { path: "cronograma", Component: ManageSchedulePage },
          { path: "asignar-evaluadores", Component: AssignEvaluatorsPage },
          { path: "novedades", Component: NewsPage },
          { path: "trabajos", Component: ManageWorksPage },
        ],
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
