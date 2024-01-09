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
               toast.success("Record created successfully!")
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
               toast.success("Record updated successfully!")
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
               toast.success("Record deleted successfully!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }



    
}

export default new DricService();