function createWritebackGUI(object) {
    return {
        object: object,
        attributeMap: new Map(),

        addWritebackValue: function (element, attributeName) {
            this.attributeMap.set(attributeName, element);

            return element;
        },

        writeBack: function () {
            this.attributeMap.forEach(function (value, key) {
                object[key] = value.getWriteBackValue();
            });
        }
    }
}

function createListView() {
    return {
        listView: new javafx.scene.control.ListView(),

        setItems: function(list) {
            this.listView.setItems(list);
        },

        createList: function() {
            return javafx.collections.FXCollections.observableArrayList();
        },

        setOnClick: function(handle) {
            this.listView["setOnMouseClicked(javafx.event.EventHandler)"](
                function (mouseEvent) {
                    handle(mouseEvent);
                }
            );
        }
    }
}

function createDialog(name) {
    return {
        dialog: new javafx.stage.Stage(),

        readyUp: function(pane) {
            let instance = Java.type('me.goddragon.teaseai.TeaseAI').application;
            let controller = instance.getController();
            this.dialog.initModality(javafx.stage.Modality.APPLICATION_MODAL);

            let dialogScene = new javafx.scene.Scene(pane);
            this.dialog.setScene(dialogScene);

            controller.addMainScene(dialogScene);
        },

        readyAndShow: function(pane) {
            this.readyUp(pane);
            this.dialog.show();
        },

        close: function() {
            this.dialog.close();
        }
    }
}

function createGridPaneGUI() {
    return {
        gridPane: new javafx.scene.layout.GridPane(),

        setPadding: function (top, right, bottom, left) {
            this.gridPane.setPadding(new javafx.geometry.Insets(top, right, bottom, left));
        },

        setVGap: function (gap) {
            this.gridPane.setVgap(gap);
        },

        setHGap: function (gap) {
            this.gridPane.setHgap(gap);
        },

        setConstraints: function (element, column, row) {
            javafx.scene.layout.GridPane.setConstraints(element, column, row);
        },

        getChildren: function () {
            return this.gridPane.getChildren();
        },

        addTextSetting: function (row, identifier, textContent) {
            let textSetting = createTextField(textContent);
            this.addIdentifierAndSetting(row, identifier, textSetting.textField);
            return textSetting;
        },

        addComboBox: function (row, identifier) {
            let comboBox = createComboBox();
            this.addIdentifierAndSetting(row, identifier, comboBox.comboBox);
            return comboBox;
        },

        addCheckBox: function (row, identifier) {
            let checkBox = createCheckBox();
            this.addIdentifierAndSetting(row, identifier, checkBox.checkBox);
            return checkBox;
        },

        addIdentifierAndSetting: function (row, identifier, element) {
            let textField = new javafx.scene.text.Text(identifier + ":");
            this.setConstraints(textField, 0, row);
            this.setConstraints(element, 1, row);

            this.getChildren().add(textField);
            this.getChildren().add(element);

            return textField;
        },

        addCloseButton: function(dialog, column, row) {
            let close = createButton("Close");
            this.setConstraints(close.button, column, row);
            this.getChildren().add(close.button);

            close.setOnAction(function(handle) {
                dialog.close();
            });
        },

        addSaveButton: function(row, dialog, writebackGui, saveFunction) {
            let save = createButton("Save");
            this.setConstraints(save.button, 1, row);
            this.getChildren().add(save.button);

            save.setOnAction(function (handle) {
                writebackGui.writeBack();
                saveFunction();
                dialog.close();
            });
        }
    }
}


function createButton(text) {
    return {
        button: new javafx.scene.control.Button(text),

        setOnAction: function (handle) {
            let textField = this.textField;
            this.button["setOnAction(javafx.event.EventHandler)"](
                function (actionEvent) {
                    handle(actionEvent);
                }
            );
        },
    }
}

function createImageView() {
    return {
        imageView: new javafx.scene.image.ImageView(),

        setImage: function (pathToImage) {
            let file = TAJFileUtils.getRandomMatchingFile(pathToImage);

            if(file !== null) {
                let image = new javafx.scene.image.Image("file:" + file.getPath());
                this.imageView.setImage(image);
            }
        },

        setFitWidth: function (int) {
            this.imageView.setFitWidth(int);
        },

        setPreserveRatio: function (bool) {
            this.imageView.setPreserveRatio(bool);
        },

        setSmooth: function (bool) {
            this.imageView.setSmooth(bool);
        },

        setCache: function (bool) {
            this.imageView.setCache(bool);
        },
    }
}

function createTextField(text) {
    return {
        textField: new javafx.scene.control.TextField(text),

        setOnlyIntegers: function () {
            let textField = this.textField;
            this.textField.textProperty()["addListener(javafx.beans.value.ChangeListener)"](
                function (observable, oldValue, newValue) {
                    if (!newValue.matches("\\d*")) {
                        textField.setText(newValue.replace(/[^\d]/, ""));
                    }
                }
            );
        },

        setOnlyDoubles: function () {
            let textField = this.textField;
            this.textField.textProperty()["addListener(javafx.beans.value.ChangeListener)"](
                function (observable, oldValue, newValue) {
                    if (!newValue.matches("-?(([1-9][0-9]*)|0)?(\\.[0-9]*)?")) {
                        textField.setText(text);
                    }
                }
            );
        },

        getWriteBackValue: function () {
            return this.textField.getText();
        }
    }
}

function createComboBox() {
    return {
        comboBox: new javafx.scene.control.ComboBox(),
        childrenParent: null,

        addChoice: function (name) {
            this.comboBox.getItems().add(name);
        },

        select: function (index) {
            this.comboBox.getSelectionModel().select(index);
        },

        selectFirst: function () {
            this.comboBox.selectFirst();
        },

        addChildren: function (object, selected) {
            let indexToSelect = -1;

            if(Array.isArray(object)) {
                let array = object;

                object = {};

                for(let x = 0; x < array.length; x++) {
                    object[array[x]] = array[x];
                }
            }

            for (let property in object) {
                if (object.hasOwnProperty(property) && typeof object[property] !== 'function') {
                    this.addChoice(property);

                    if (selected !== undefined && object[property] !== undefined && object[property].toString() === selected.toString()) {
                        indexToSelect = object[property];
                    }
                }
            }

            if (indexToSelect !== -1) {
                this.select(indexToSelect);
            }

            this.childrenParent = object;
        },

        getWriteBackValue: function () {
            let selected = this.comboBox.getSelectionModel().getSelectedItem();

            if (selected !== null && selected !== undefined) {
                for (let property in this.childrenParent) {
                    if (this.childrenParent.hasOwnProperty(property) && typeof this.childrenParent[property] !== 'function') {
                        this.addChoice(property);

                        if (this.childrenParent[property] !== undefined && property.toString() === selected.toString()) {
                            return this.childrenParent[property];
                        }
                    }
                }
            }

            return undefined;
        }
    }
}

function createCheckBox() {
    return {
        checkBox: new javafx.scene.control.CheckBox(),

        setSelected: function (bool) {
            this.checkBox.setSelected(bool);
        },

        getWriteBackValue: function () {
            return this.checkBox.isSelected();
        }
    }
}

function generateSettingGUI(object, gridPane) {
    let row = 0;
    for (let property in object) {
        if (object.hasOwnProperty(property) && typeof object[property] !== 'function') {
            let box = gridPane.addTextSetting(row++, property, object[property]);
        }
    }
}
