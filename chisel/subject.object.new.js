// @ts-check
export default ({subject, object}) =>
    /** @type { import("../handlers").pageFactory } */
    ({
        lib: {
            editor
        }
    }) => ({
        [`${subject}.${object}.new`]: () => ({
            title: `Create ${object}`,
            permission: `${subject}.${object}.add`,
            component: editor
        })
    });
