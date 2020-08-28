const action_addcart = (item) => ({
    type: "ACTION_ADDCART",
    item : item 
});

const action_mincart = (item) => ({
    type: "ACTION_MINCART",
    item : item 
});

export {
    action_addcart,
    action_mincart
}