import {
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200 dark:border-gray-800">
      {/* image */}
      <img
        src={post.userImg}
        alt="user-img"
        className="h-11 w-11 rounded-full mr-4"
      />
      {/* right side */}
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex item-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          {/* dot icon */}
          <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        {/* post text */}
        <p className="text-gray-800 dark:text-gray-200 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* post image */}
        <img
          className="rounded-2xl mr-2 h-80 w-80"
          src={post.img}
          alt="post-img"
        />

        {/* icons */}
        <div className="flex justify-between text-gray-500 dark:text-gray-100 p-2">
          <ChatBubbleLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}

export default Post;
