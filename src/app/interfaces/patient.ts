export interface Patient {
    id: number,
    name: string,
    national_id: string,
    nationality: string,
    mobile: string,
    age: number,
    diagnostic: string,
    patient_details: [{
        doctor_id: number,
        recipe_id: number
    }]
}
