export function fetchCreateRoom (){

}

export const controlNickname = {
    save(value){
        window.sessionStorage.setItem('nickName',value);
    },
    get(){
        return window.sessionStorage.getItem('nickName')||"";
    },
    clear(){
        window.sessionStorage.removeItem('nickName');
    }
}