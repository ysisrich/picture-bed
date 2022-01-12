import { defineStore } from 'pinia'
import setting from './module/setting'
import user from './module/user'


export const useSetting = defineStore(setting)
export const useUser = defineStore(user)

