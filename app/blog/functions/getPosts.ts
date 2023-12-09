import prisma from "@/app/lib/prisma";
type getPostsProps = {
  max?: number
  page?: number
  q?: string
}

export default async function getPosts(args?: getPostsProps) {
  const max = args && args.max ? args.max : 0xffff;
  const page = args && args.page ? args.page : 1;
  const q = args && args.q ? args.q : "";
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        // 降順
        date: "desc",
      },
      include: {
        // ユーザー情報も含める（POSTテーブルにないもの、JOIN文）
        user: {
          select: {
            name: true,
            icon: true,
          },
        },
      },
    });
    return posts;
  } catch {
    return []
  }
}
