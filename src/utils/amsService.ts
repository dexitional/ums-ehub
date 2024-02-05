import axios from 'axios';
import toast from 'react-hot-toast';
const { REACT_APP_API_URL } = import.meta.env;

class Service {
    
    /* Sessions */
    async fetchSessionList(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/sessions/list`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }
     
    async fetchSessions(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/sessions?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchSession(sessionId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/sessions/${sessionId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postSession(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/sessions`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateSession(sessionId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/sessions/${sessionId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteSession(sessionId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ams/sessions/${sessionId}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


    /* Vouchers */
    async fetchVouchers(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/vouchers?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchVoucher(voucherId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/vouchers/${voucherId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postVoucher(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/vouchers`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async sellVoucher(voucherId,data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/vouchers/${voucherId}/sell`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               const dt = res.data;
               toast(`Voucher sold to ${data.applicantName}!\n\n\t\tSerial: ${dt.serial}\n\t\tPin: \t${dt.pin}`,{ duration: 10000, className:'border-2 border text-lg font-medium' })
               //toast.success("Voucher sold!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async recoverVoucher(voucherId){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/vouchers/${voucherId}/recover`, { serial: voucherId } ,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               const dt = res.data;
               toast(`Voucher sold to ${dt.applicantName}!\n\n\t\tSerial: ${dt.serial}\n\t\tPin: \t${dt.pin}`,{ duration: 10000, className:'border-2 border text-lg font-medium' })
                //toast.success("Voucher recovered!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateVoucher(voucherId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/vouchers/${voucherId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteVoucher(voucherId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ams/vouchers/${voucherId}`)
            if(res.status == 200){
               toast.success(`Voucher ${voucherId} was reset !`)
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


    /* Letters */
    async fetchLetterList(){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/letters/list`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
     }

    async fetchLetters(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/letters?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchLetter(letterId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/letters/${letterId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postLetter(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/letters`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateLetter(letterId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/letters/${letterId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteLetter(letterId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ams/vouchers/${letterId}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

     /* Applicants */
     async fetchApplicants(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/applicants?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchApplicant(applicantId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/applicants/${applicantId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async fetchApplicantPreview(applicantId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/applicants/${applicantId}/preview`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postApplicant(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/applicants`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateApplicant(applicantId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/applicants/${applicantId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async Applicant(applicantId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/applicants/${applicantId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteApplicant(applicantId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ams/applicants/${applicantId}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


    /* Shortlists */
    async fetchShortlists(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/shortlists?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchShortlist(shortlistId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/shortlists/${shortlistId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postShortlist(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/shortlists`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Applicant shortlisted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateShortlist(shortlistId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/shortlists/${shortlistId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteShortlist(shortlistId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ams/shortlists/${shortlistId}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }


    /* Matriculants */
    async fetchMatriculants(keyword,page){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/matriculants?keyword=${keyword}&page=${page}`)
            if(res.status == 200 || res.status == 204)
              return res.data
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async fetchMatriculant(matriculantId){
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/ams/matriculants/${matriculantId}`)
            if(res.status == 200 || res.status == 204)
               return res.data
            else throw new(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
        }
    }

    async postMatriculant(data){
        try {
            const res = await axios.post(`${REACT_APP_API_URL}/ams/matriculants`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async updateMatriculant(matriculantId,data){
        try {
            const res = await axios.patch(`${REACT_APP_API_URL}/ams/shortlists/${matriculantId}`, data,{
               headers: { "Content-Type" : "application/json" }
            })
            if(res.status == 200){
               toast.success("Record saved!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

    async deleteMatriculant(matriculantId){
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/ams/matriculants/${matriculantId}`)
            if(res.status == 200){
               toast.success("Record deleted!")
               return res.data
            } 
            else throw new(res.data.message)
        
        } catch (error) { 
            toast.error(error.message)
        }
    }

}

export default new Service();