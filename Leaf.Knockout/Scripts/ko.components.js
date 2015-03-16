ko.components.register('grid-item', {
    viewModel: function (params) {
        return params.value;
    },
    template: { element: 'grid-item' }
});