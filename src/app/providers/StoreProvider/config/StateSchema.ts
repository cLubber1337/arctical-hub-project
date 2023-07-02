import { CounterSchema } from "app/entities/counter"
import { UserSchema } from "app/entities/User/model/types/user"
import { LoginSchema } from "features/AuthByUsername/model/types/loginSchema"

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
}
