import { skipToken } from "@reduxjs/toolkit/query";
import { IComment } from "../../features/comments/commentsSlice";
import { baseApi } from "../../shared/api";

export const commentsApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getComments: create.query<IComment[], void>({
            query: () => '/comments'
        }),

        getComment: create.query<IComment, string>({
            query: (commentId) => `/comments/${commentId}`
        }),
    }),
    overrideExisting: true, // чтобы RTK не ругался на применение хот модуля реплейсмента
})

// использование getComment:
// const {data: comment, isLoadingComment} = commentsApi.useGetCommentQuery(id ?? skipToken);
