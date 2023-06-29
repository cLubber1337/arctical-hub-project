import { CounterSchema } from "app/entities/counter"
import { UserSchema } from "app/entities/User/model/types/user"



export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
