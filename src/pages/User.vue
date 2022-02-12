<template>
    <div class="content">
        <n-space vertical v-show="userInfo && userInfo.avatar_url">
            <n-image width="160" style="border-radius: 80px;" :src="userInfo.avatar_url" />
            <div class="name">{{userInfo.name}}</div>
            <div>@{{userInfo.login}}</div>
            <div>{{userInfo.bio}}</div>
            <div class="data">
                <div v-show="userInfo.hasOwnProperty('stared')">
                    <span>{{userInfo.stared}}</span>
                    <span>Stars</span>
                </div>
                <div v-show="userInfo.hasOwnProperty('watched')">
                    <span>{{userInfo.watched}}</span>
                    <span>Watches</span>
                </div>
                <div>
                    <span>{{userInfo.followers}}</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span>{{userInfo.following}}</span>
                    <span>Following</span>
                </div>
            </div>

            <div>
                <span>邮箱：</span>
                <span>{{userInfo.email}}</span>
            </div>
            <div>
                <span>博客：</span>
                <span>{{userInfo.blog}}</span>
            </div>
            <!-- <div>
                <span>微博：</span>
                <span>{{userInfo.weibo}}</span>
            </div> -->
        </n-space>
    </div>
</template>

<script>
    import { useUser } from '@/store/index'
    import { reactive, toRefs, watch, computed } from 'vue'

    export default {
        name: "User",

        setup() {
            const data = reactive({
                userInfo: {}
            })
            const timer = setInterval(() => {
                if (useUser().git.userInfo.avatar_url) {
                    data.userInfo = useUser().git.userInfo
                    clearInterval(timer)
                }
            }, 200)

            return {
                ...toRefs(data)
            }
        }

    };
</script>

<style lang="scss" scoped>
    .content {
        width: $main-width;
        height: calc(100vh - 168px);
        margin: auto;
        text-align: center;
        box-sizing: border-box;

        .data {
            /* width: 50%; */
            margin: 10px auto;
            @include flx(center, center);

            div {
                width: 100px;
                @include flx(center, center, column);
            }
        }

        .name {
            font-weight: 900;
            font-size: 20px;
        }
    }
</style>