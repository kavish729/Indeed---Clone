const getLocalData=(key)=>{
    if(key){
        const data=localStorage.getItem(key);
    }
}

const saveLocalData =(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value);
    }
}

export {getLocalData, saveLocalData}