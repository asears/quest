﻿<ControlType("filter")> _
Public Class DropDownFilterControl
    Inherits DropDownControl

    Private m_dropDownValues As IDictionary(Of String, String)
    Private m_filterGroup As String
    Private m_controlData As IEditorControl

    Protected Overrides Sub InitialiseControl(controlData As IEditorControl)
        m_controlData = controlData

        If controlData IsNot Nothing Then
            m_dropDownValues = controlData.GetDictionary("filters")
            lstDropdown.Items.AddRange(m_dropDownValues.Values.ToArray())
            m_filterGroup = controlData.GetString("filtergroupname")
        Else
            lstDropdown.Items.Clear()
        End If
    End Sub

    Protected Overrides Sub PopulateData(data As IEditorData)
        Dim selectedItem As String = data.GetSelectedFilter(m_filterGroup)
        If selectedItem Is Nothing Then selectedItem = m_controlData.Parent.GetDefaultFilterName(m_filterGroup, data)
        lstDropdown.Text = m_dropDownValues(selectedItem)
    End Sub

    Protected Overrides Sub SaveData(data As IEditorData)
        Dim filter As String = GetSelectedFilter()
        If filter Is Nothing Then Return

        data.SetSelectedFilter(m_filterGroup, filter)
    End Sub

    Private Function GetSelectedFilter() As String
        If lstDropdown.Text.Length = 0 Then Return Nothing
        Return m_dropDownValues.Keys.ToArray()(lstDropdown.SelectedIndex)
    End Function

    Protected Overrides Function GetValue() As Object
        Return Nothing
    End Function

    Protected Overrides Sub SetValue(value As Object)
        ' do nothing
    End Sub
End Class
