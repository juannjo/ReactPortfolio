import { Route, Routes } from "react-router-dom"
import { AboutMe, HomePage, Projects, Contact } from "../pages"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/about" element={ <AboutMe /> }/>
        <Route path="/*" element={ <HomePage />} />
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/projects" element={ <Projects/> }/>
      </Routes>
  )
}
