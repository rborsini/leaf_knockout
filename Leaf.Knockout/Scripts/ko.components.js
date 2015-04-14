ko.components.register('grid-item', {
    viewModel: function (params) {
        return params.value;
    },
    template: { element: 'grid-item' }
});

ko.components.register('loccioni-pipol', {
    viewModel: function (params) {
        this.firstName = params.value.firstName;
        this.lastName = params.value.lastName;
    },
    template: '<p><span data-bind="text: firstName"></span>---<span data-bind="text: lastName"></span></p>'
});