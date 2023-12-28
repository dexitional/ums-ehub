import axios from 'axios';
import toast from 'react-hot-toast';
const { REACT_APP_API_URL } = import.meta.env;


/* Filter Routes */
// this.router.get('/colleges', this.controller.fetchColleges);
// this.router.get('/colleges/:collegeId/faculties', this.controller.fetchFaculties);
// this.router.get('/colleges/:collegeId/faculties/:facultyId/departments', this.controller.fetchDepartments);
// this.router.get('/colleges/:collegeId/faculties/:facultyId/departments/:  deptId/candidates', this.controller.fetchCandidates);
// this.router.get('/search', this.controller.fetchCandidate);

// /* Submission Routes */
// this.router.get('/votes', this.controller.fetchVotes);
// this.router.get('/votes/:regno', this.controller.fetchVote);
// this.router.post('/votes', this.controller.postVote);
// this.router.patch('/votes/:regno', this.controller.updateVote);

class EvsService {
    
    ////**** BEST LECTURER SYSTEM  ****////

    async fetchColleges(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/colleges`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchFaculties(collegeId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/colleges/${collegeId}/faculties`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchDepartments(facultyId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/faculties/${facultyId}/departments`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchCandidates(deptId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/departments/${deptId}/candidates`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchCandidate(keyword){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/search?keyword=${keyword}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }


    async fetchVotes(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/votes`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchVoters(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/voters`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


    async fetchVote(regno){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/votes/${encodeURIComponent(regno)}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postVote(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/evs/votes`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record created successfully!")
               return res.data
            } 
            else return toast.error(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateVote(regno,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/evs/votes/${encodeURIComponent(regno)}`, data,{
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

   
    /* ROLES */

    async fetchRoles(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/roles`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchRole(roleId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/roles/${roleId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postRole(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/evs/roles`, data,{
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

    async updateRole(roleId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/evs/roles/${roleId}`, data,{
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

    async deleteRole(roleId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/evs/roles/${roleId}`)
            if(res.status == 200){
               toast.success("Record deleted successfully!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


     /* SETTINGS */

     async fetchSettings(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/settings`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchSetting(settingId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/evs/settings/${settingId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postSetting(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/evs/settings`, data,{
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

    async updateSetting(settingId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/evs/settings/${settingId}`, data,{
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

    async deleteSetting(settingId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/evs/settings/${settingId}`)
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

export default new EvsService();