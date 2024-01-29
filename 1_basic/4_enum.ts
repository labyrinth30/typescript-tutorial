/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * LOADING - 요청 중 상태
 * ERROR - 요청 실패 상태
 * INITIAL - 초기 상태
 */
function runwork(){
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // 작업을 한다
        state = 'DONE';
    } catch (error) {
        state = 'ERROR';
    }
    finally{
        return state;
    }
}   

console.log(runwork() === 'DONE');

const doneState = 'DONE';
const loadingState = 'LOADGNG';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2(){
    let state = initialState;

    try{
        state = loadingState;
        // 작업을 한다.

        state = doneState;
    }catch(e){
        state = errorState;
    }finally{
        return state;
    }
}

console.log(runWork2() === doneState);

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork3(){
    let state = State.INITIAL;

    try{
        state = State.LOADING;
        // 작업을 한다.

        state = State.DONE;
    }catch(e){
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3());