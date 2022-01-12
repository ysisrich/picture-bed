import { defineStore } from "pinia";
import setting from "./module/setting";
import user from "./module/user";
import content from "./module/content";

export const useSetting = defineStore(setting);
export const useUser = defineStore(user);
export const useContent = defineStore(content);
