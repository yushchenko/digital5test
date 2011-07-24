select manager.empname
from employee as manager
     inner join employee as e on e.mgrid = manager.empid
order by manager.empname


select independent.empname
from employee as independent
     inner join employee as e on e.mgrid = independent.empid
where independent.mgrid is null
order by independent.empname




