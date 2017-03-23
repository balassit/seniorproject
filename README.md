 - Add needs to be removed from UI; will only be used by API
 - Update needs to be only for the Comment, Status
 - Use Fixed, Viewed, Unread as type for status (change from number)
 - Severity will be blocked to 1-3 range by API 
 - Remove name field
 - Only allow one id from API request
 - Date is only modified by API
 - Comment and Status are the only fields to be changed
 - Is it POST or PUT for these?
 - Need a separate type for list of Modules, not just pulling data from reports
 - make the dashboard be a list of modules on a sidebar
 - Add sort options to table
 - Add pagination after view of 10 reports
 - Change api endpoint "detail" to "report"
 - Add endpoint for "module"
 - Allow for querying in the url for:
   1) module name
   2) report title
   3) status
   4) severity
   5) date
   6) id

