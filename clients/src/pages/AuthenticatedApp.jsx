import { useAuth } from "../contexts/authentication";
import AuthenticatedProfessional from "./AuthenticatedProfessional";
import AuthenticatedRecruiter from "./AuthenticatedRecruiter";
import jwtDecode from "jwt-decode";
import jwtInterceptor from "../utils/jwtInterceptor";

function AuthenticationApp() {
  const token = localStorage.getItem("token");
  jwtInterceptor();
  const userDataFromToken = jwtDecode(token);

  return userDataFromToken.userType === "professional" ? (
    <AuthenticatedProfessional />
  ) : (
    <AuthenticatedRecruiter />
  );

  // <ThemeProvider theme={theme}>
  //   <Routes>
  //     <Route path="/" element={<HomePage />}></Route>
  //     <Route path="/login" element={<Login />}></Route>
  //     {/* ------------------------professional part------------------ */}
  //     <Route path="/findjobs" element={<FindJobs />}></Route>
  //     <Route path="/findjobs/:jobid" element={<JobDetail />}></Route>
  //     <Route path="/applications" element={<Applications />}></Route>
  //     <Route
  //       path="/applications/:jobid"
  //       element={<ApplicationForm />}
  //     ></Route>
  //     <Route path="/following" element={<Following />}></Route>
  //     <Route path="/profile" element={<ProfessionalProfile />}></Route>-
  //     {/* ------------------------mock recruiter createpost------------------ */}
  //     <Route path="recruiter/jobpost" element={<JobPost />}></Route>
  //     <Route path="recruiter/createjob" element={<CreateJob />}></Route>
  //     <Route path="recruiter/profile" element={<RecruiterProfile />}></Route>
  //     {/* -------------------------mock recruiter createpost------------------ */}
  //     <Route path="/register" element={<Register />}></Route>
  //   </Routes>
  // </ThemeProvider>
}

export default AuthenticationApp;
