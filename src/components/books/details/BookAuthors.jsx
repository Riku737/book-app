export default function BookAuthors({names, ids}) {
    return (
        <>
            {names?.map((name, i) => (
                <span key={i}>
                    <a
                        href={`${ids?.[i]}`}
                        className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                        {name}
                    </a>
                    {i < names.length - 1 && ", "}
                </span>
            ))}
        </>
    );
}