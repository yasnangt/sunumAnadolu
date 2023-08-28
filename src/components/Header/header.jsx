import Link from "next/link";

export default function Header({ username, page }) {
  if (page != "profile") {
    return (
      <>
        <div
          id="headerTop"
          className="flex justify-center bg-slate-900/40 py-2"
        >
          <span>Hoşgeldin {username}!</span>
        </div>
        <div
          id="header"
          className="flex w-full px-5 gap-10 py-5 border-b-2 justify-between"
        >
          <div className="flex gap-10">
            <a>Blog</a>
            <Link href={`/${username}`}>Profile</Link>
          </div>
          <div className="flex gap-10">
            <Link href={`/blog/createBlog`}>Blog oluştur</Link>
            <Link href={`/`}>Çıkış Yap</Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          id="header"
          className="flex w-full px-5 gap-10 py-5 border-b-2 justify-between"
        >
          <div className="flex gap-10">
            <Link href={`/home`}>Anasayfa</Link>
            <a>Blog</a>
          </div>
          <div>
            <Link href={`/`}>Çıkış Yap</Link>
          </div>
        </div>
      </>
    );
  }
}
