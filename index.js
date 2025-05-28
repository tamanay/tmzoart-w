import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import GlobalStyles from "../components/GlobalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Slideshow />
        {/* بخش‌های بعدی مثل درباره ما، آثار و غیره رو می‌تونیم اضافه کنیم */}
      </main>
    </>
  );
}