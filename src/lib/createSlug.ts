// https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/
export default function (title: string) {
    return (
      title
        // remove leading & trailing whitespace
        .trim()
        // remove special characters
        .replace(/[^A-Za-z0-9 ]/g, '')
        // replace spaces
        .replace(/\s+/g, '-')
        // remove leading & trailing separtors
        .replace(/^-+|-+$/g, '')
        // output lowercase
        .toLowerCase()
    )
  }