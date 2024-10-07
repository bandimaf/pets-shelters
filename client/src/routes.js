import { ADMIN_ROUTE, AUTH_ADMIN_ROUTE, AUTH_EMPLOYEE_ROUTE, EMPLOYEE_ROUTE, FUNDS_ROUTE, FUND_PAGE_ROUTE, MAIN_PAGE, NEWS_PAGE_ROUTE, NEWS_ROUTE, OWNER_ROUTE, PETS_ROUTE, PET_PAGE_ROUTE, SHELTERS_ROUTE, SHELTER_PAGE_ROUTE, VOLUNTEERS_ROUTE,  } from "./utils/consts"
import Employee from "./pages/admins/Employee"
import Admin from "./pages/admins/Admin"
import Owner from "./pages/admins/Owner"
import AuthAdmin from "./pages/admins/AuthAdmin"
import AuthEmployee from "./pages/admins/AuthEmployee"
import Funds from "./pages/Funds"
import News from "./pages/News"
import Pets from "./pages/Pets"
import Shelters from "./pages/Shelters"
import FundPage from "./pages/FundPage"
import NewsPage from "./pages/NewsPage"
import PetPage from "./pages/PetPage"
import ShelterPage from "./pages/ShelterPage"
import Volunteers from "./pages/Volunteers"
import MainPage from "./pages/MainPage"

export const authRoutes = [,
    {
        path: EMPLOYEE_ROUTE,
        Component: Employee
    },
    {
        path: OWNER_ROUTE,
        Component: Owner 
    },
]

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin 
    },
    {
        path: AUTH_ADMIN_ROUTE,
        Component: AuthAdmin 
    },
    {
        path: AUTH_EMPLOYEE_ROUTE,
        Component:  AuthEmployee
    },
    {
        path: FUNDS_ROUTE,
        Component: Funds 
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: PETS_ROUTE,
        Component: Pets
    },
    {
        path: SHELTERS_ROUTE,
        Component: Shelters 
    },
    {
        path: FUND_PAGE_ROUTE,
        Component:  FundPage
    },
    {
        path: NEWS_PAGE_ROUTE,
        Component: NewsPage 
    },
    {
        path: PET_PAGE_ROUTE /*+ '/:id'*/,
        Component: PetPage
    },
    {
        path: SHELTER_PAGE_ROUTE + '/:id',
        Component: ShelterPage 
    },
    {
        path: VOLUNTEERS_ROUTE,
        Component: Volunteers 
    },
    {
        path: MAIN_PAGE,
        Component: MainPage 
    }
]