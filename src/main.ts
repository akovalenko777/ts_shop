import { IResponse, ISearchItem } from "./interfaces/search";

let a: any = 1;

a = 'q'

a = []

const b: boolean = true

// const arr: Array<number> = []
const arr: number[] = []

arr.push(1)

// arr.push('1')

type TGender = 'male' | 'female'

interface IUser {
  name: string
  age: number
  gender: TGender
  position?: string
}

const user: IUser = {
  name: 'Petro',
  age: 35,
  gender: 'male'
}

// const users: Array<IUser> = []
const users: IUser[] = []

users.push(user)

users.push({
  name: 'Ann',
  age: 25,
  gender: 'female',
  position: 'manager'
})

type TmyFunc = string | boolean | number

function myFunc(s: string): TmyFunc {
  alert('Hello, '+s)
  if(s===''){
    return false
  }
  if(s==='1'){
    return 1
  }
  return 'Hello, '+s
}

// myFunc(user.name)

let rez: TmyFunc = true

// rez = myFunc('qwer')







async function myFetch(s: string): Promise<IResponse> {
  const resp = await fetch(`https://www.omdbapi.com/?apikey=294b52ec&s=${s}&type=movie`)
  const json = await resp.json()
  return json
}

// const result = await myFetch('batman')

// const moviesList: ISearchItem[] = result.Search || []

// moviesList.forEach(item => {
//   console.log(item.Title);
  
// })

function printId(id: number | string) {
  // console.log((id as string).toUpperCase());
  console.log(typeof id === 'string' ? id.toUpperCase() : id);
  
}

printId(1)
printId('aaa')



// const btn = document.getElementById('my-btn') as HTMLButtonElement

// btn.onclick = function (e){
//   const target = e.target as HTMLButtonElement
//   target?.classList.toggle('clicked')
//   target.value
// }


enum ValidationResponse {
  success,
  empty,
  tooShort,
  invalid
}


function validate(s: string): ValidationResponse {
  if(s===''){
    // return ValidationResponse.empty
    return 1
  }
  if(s.length < 6){
    // return ValidationResponse.tooShort
    return 2
  }
  // return ValidationResponse.success
  return 0
}

const result = validate('qwerasdf')
console.log(result);
