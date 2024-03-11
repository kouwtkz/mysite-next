import { TopPageImage, TopPagePostList } from "@/app/TopPage";
import Link from "next/link";
import MultiParser from "./components/tag/MultiParser";
import { MdServerNode } from "./context/md/MarkdownDataServer";

export default async function Page() {
  return (
    <>
      <TopPageImage />
      <MdServerNode name="top.md" parsedClassName="topPageParsed" />
      {process.env.BLOG_ENABLE !== "false" ? <TopPagePostList /> : null}
    </>
  );
}
