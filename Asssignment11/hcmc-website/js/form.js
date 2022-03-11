/**
 * form.js
 * 
 * @author Shristi Gautam
 * @since 2022-03-10
 */

"use strict";
import { Patient } from "../js/model/patients.js";

$('document').ready(function () {
    $("#patientsForm").submit(createPatient);
    function createPatient() {
        event.preventDefault();
        const id = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleInitials = $("#middleInitials").val();
        const lastName = $("#lastName").val();
        const dateOfBirth = $("#dateOfBirth").val();
        const department = $("#ddlDepartment").val();
        const IsOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked').value
        const chkElderlyPatients = $("#chkElderlyPatients").val();
        const chkShowOutPatients = $("#chkShowOutPatients").val();

        const patientsData = [];
        const newPatient = new Patient(id, firstName, middleInitials, lastName, dateOfBirth, department, IsOutPatient, chkElderlyPatients, chkShowOutPatients);
        patientsData.push(newPatient);

        createDOM(newPatient);
    }

    function createDOM(newPatient) {
        const tblAccounts = document.querySelector(".table");
        const newRow = tblAccounts.insertRow(-1) //-1 le last ma append garxa, 0 le top ma 

        const cellId = newRow.insertCell(0);
        const strId = document.createTextNode(`${newPatient.getId()}`);
        cellId.appendChild(strId);

        const cellfirstName = newRow.insertCell(1);
        const strfirstName = document.createTextNode(`${newPatient.getfirstName()}`);
        cellfirstName.appendChild(strfirstName);

        const cellmiddleInitials = newRow.insertCell(2);
        const strNewmiddleInitials = document.createTextNode(`${newPatient.getmiddleInitials()}`);
        cellmiddleInitials.appendChild(strNewmiddleInitials);

        const celllastName = newRow.insertCell(3);
        const strlastName = document.createTextNode(`${newPatient.getlastName()}`);
        celllastName.appendChild(strlastName);

        const celldateofBirth = newRow.insertCell(4);
        const strdateofBirth = document.createTextNode(`${newPatient.getdateofBirth()}`);
        celldateofBirth.appendChild(strdateofBirth);

        const celldepartment = newRow.insertCell(5);
        const strdepartment = document.createTextNode(`${newPatient.getdepartment()}`);
        celldepartment.appendChild(strdepartment);

        const cellisOutPatient = newRow.insertCell(6);
        const strisOutPatient = document.createTextNode(`${newPatient.getisOutPatient()}`);
        cellisOutPatient.appendChild(strisOutPatient);

        $(".table thead tr td").attr("id", function (arr) {
            return "div-id" + arr;
        });
    }

    $('input[type="checkbox"]#chkElderlyPatients').click(function () {
        if ($(this).is(":checked")) {
            $('tr').each(function (index) {
                $('td').each(function () {
                    console.log(new Date().getFullYear()- new Date($(this).text()).getFullYear());
                    if (new Date().getFullYear()- new Date($(this).text()).getFullYear() < 65) {
                        let row = $(this);
                        row.parent().hide();
                    }
                })
            });
        }
        else if ($(this).is(":not(:checked)")) {
            $('tr').each(function (index) {
                $('td').each(function () {
                    $(this).parent().show();
                })
            });
        }
    });
});


$('input[type="checkbox"]#chkShowOutPatients').click(function () {
    if ($(this).is(":checked")) {
        $('tr').each(function (index) {
            $('td').each(function () {
                console.log($(this).text());
                if ($(this).text() == "No") {
                    let row = $(this);
                    row.parent().hide();
                }
            })
        });
    }
    else if ($(this).is(":not(:checked)")) {
        $('tr').each(function (index) {
            $('td').each(function () {
                $(this).parent().show();
            })
        });
    }
});


