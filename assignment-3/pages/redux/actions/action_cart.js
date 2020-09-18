const action_addcart = (total, item) => ({
    type: "ACTION_ADDCART",
    item : item,
    total : total
});

export {
    action_addcart
}