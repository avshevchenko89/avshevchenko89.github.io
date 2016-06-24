define (
    'controller',
    ['model', 'view', 'jquery'],
    function (model, view) {

        function Controller (model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.list__item__control__button--edit', editItem);
            view.elements.listContainer.on('click', '.list__item__control__button--delete', removeItem);

            function addItem () {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function editItem () {
                var item = $(this).attr('data-value');
                var index = model.itemEditIndex(item);
                var itemNew = $('<input type="text">');
                var saveBtn =$('<button>Save</button>');
                $(this).parent().html('').append(itemNew).append(saveBtn);
                saveBtn.on('click', function () {
                    model.changeItem(itemNew.val(), index);
                    view.renderList(model.data);
                    itemNew.val('');
                });
            }

            function removeItem () {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            }
        }

        var controller = new Controller(model, view);
        return controller;
    }
);
