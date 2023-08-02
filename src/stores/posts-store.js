import { ref } from 'vue';
import { defineStore } from 'pinia';
import { PostsService } from '@/services/posts-service';
import { useLoaderStore } from '@/stores/loader-store';

export const usePostsStore = defineStore('posts', () => {
    const postsList = ref([]);
    const totalValue = ref(0);
    const postInfo = ref({});

    const loaderStore = useLoaderStore();

    async function getPostsList (offset, limit, search) {
        loaderStore.startLoad();
        const resp = await PostsService.getPostsList(offset, limit, search);
        if (!resp) loaderStore.redirectInMain();
        postsList.value = resp.map(el => {
            return {
                ...el,
                id: String(el.id),
                userId: String(el.userId),
            };
        });
        totalValue.value = resp.length;
        loaderStore.stopLoad();
    }

    async function getPostById (id) {
        if (postInfo.value.id === id) return;
        loaderStore.startLoad();
        const resp = await PostsService.getPostById(id);
        if (!resp) loaderStore.redirectInMain();
        postInfo.value = resp;
        loaderStore.stopLoad();
    }

    async function changePostInfo (id, body) {
        loaderStore.startLoad();
        const resp = await PostsService.changePostInfo(id, body);
        if (!resp) loaderStore.redirectInMain();
        const post = postsList.value.find(el => el?.id === id);
        post.title = body.title;
        post.body = body.body;
        loaderStore.stopLoad();
    }

    async function deletePost (id) {
        loaderStore.startLoad();
        const resp = await PostsService.deletePost(id);
        if (!resp) loaderStore.redirectInMain();
        const post = postsList.value.findIndex(el => el?.id === id);
        postsList.value.splice(post, 1);
        loaderStore.stopLoad();
        return resp;
    }

    return {
        postsList,
        totalValue,
        postInfo,
        getPostsList,
        getPostById,
        changePostInfo,
        deletePost,
    };
});
