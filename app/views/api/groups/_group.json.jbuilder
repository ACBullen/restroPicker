
json.extract! group, :id, :group_code, :results_ready

json.set! "creator", group.creator.id
