import { PageProps } from "app/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact(props: PageProps) {
  const { params, searchParams } = props;

  const renderParams = () => {
    return Object.keys(searchParams).map((key, index) => (
      <div key={index}>
        <p>Key:{key}, value: {searchParams[key]}</p>
      </div>
    ));
  };

  return (
    <>
      <h2>Contact page</h2>

      <div>
        Params: {params.slug}
      </div>

      <div>
        Searchparams: {renderParams()}
      </div>
    </>
  );
}