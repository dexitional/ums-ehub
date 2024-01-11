import axios from 'axios';
import toast from 'react-hot-toast';
const { REACT_APP_API_URL } = import.meta.env;

class DricService {
    
    /* STUDENT */

    async fetchStudents(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/students?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchStudent(studentId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/students/${encodeURIComponent(studentId)}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchStudentFinance(studentId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/students/${encodeURIComponent(studentId)}/finance`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchStudentTranscript(studentId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/students/${encodeURIComponent(studentId)}/transcript`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchStudentActivity(studentId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/students/${encodeURIComponent(studentId)}/activity`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postStudent(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ais/students`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record created!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateStudent(studentId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ais/students/${encodeURIComponent(studentId)}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record updated!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteStudent(studentId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ais/students/${encodeURIComponent(studentId)}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

     /* COURSES */
     async fetchcourseList(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/courselist`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchCourses(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/courses?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchCourse(courseId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/courses/${encodeURIComponent(courseId)}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
     }

     async postCourse(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ais/courses`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record created!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async updateCourse(courseId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ais/courses/${encodeURIComponent(courseId)}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record updated!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async deleteCourse(courseId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ais/courses/${encodeURIComponent(courseId)}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     /* PROGRAMS */
     async fetchProgramList(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/programs/list`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchPrograms(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/programs?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchProgram(programId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/programs/${encodeURIComponent(programId)}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchProgramStructure(programId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/programs/${encodeURIComponent(programId)}/curriculum`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchProgramStudent(programId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/programs/${encodeURIComponent(programId)}/students`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchProgramStatistics(programId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/programs/${encodeURIComponent(programId)}/statistics`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postProgram(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ais/programs`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record created!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateProgram(programId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ais/programs/${encodeURIComponent(programId)}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record updated!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteProgram(programId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ais/programs/${encodeURIComponent(programId)}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


    /* Schemes */
    async fetchSchemeList(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/schemes/list`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchSchemes(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/schemes?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchScheme(schemeId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/schemes/${encodeURIComponent(schemeId)}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
     }

     async postScheme(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ais/schemes`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record created!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async updateScheme(schemeId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ais/courses/${encodeURIComponent(schemeId)}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record updated!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async deleteScheme(schemeId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ais/schemes/${encodeURIComponent(schemeId)}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }


     /* DEPARTMENTS */
     async fetchDepartments(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/departments`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     /* FACULTIES */
     async fetchFaculties(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/faculties`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     /* UNITS */
     async fetchUnits(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/units?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchUnit(unitId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/units/${encodeURIComponent(unitId)}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
     }

     async postUnit(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ais/units`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record created!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async updateUnit(unitId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ais/units/${encodeURIComponent(unitId)}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record updated!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async deleteUnit(unitId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ais/units/${encodeURIComponent(unitId)}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }



     /* HELPERS */
     async fetchCountries(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/countries`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchRegions(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/regions`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchReligions(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/religions`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchDisabilities(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/disabilities`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

     async fetchTitles(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ais/titles`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }


    
}

export default new DricService();