
import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},formValidations ={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({}) // evaluar un error

    useEffect(() => {// cuando cambie el formulario,formState, se disparará  la función createValidators 
      
    createValidators()
        
    }, [formState])


    useEffect(() => {
      setFormState(initialForm)
    }, [initialForm])
    
    
        const isFormValid = useMemo(() =>{
                for (const formValue of Object.keys(formValidation)) {
                    if ( formValidation[formValue] !== null) return false;
                }
                return true;
        },[formValidation]);// se ejecutará cuando cambie el estado 


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=> {
            const formCheckedValues ={};

            for (const formField of Object.keys(formValidations) ) {
            const [fn, errorMessage ='Este campo es requerido.'] = formValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn (formState[formField] )? null : errorMessage ;                
            }
            setFormValidation(formCheckedValues)
            
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
    }
}